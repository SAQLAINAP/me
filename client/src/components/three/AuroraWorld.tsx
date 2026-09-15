/**
 * AuroraWorld — the interactive 3D "world" that anchors the hero.
 *
 * Design brief:
 *   - Not a scientific model, an emotive one. A slowly rotating icosphere
 *     ("the world") with a set of orbiting satellites representing the
 *     domains I work across (voice AI, quantum, cloud-native, web, etc.).
 *   - Pointer-reactive: the whole scene tilts toward the cursor.
 *   - Click a satellite → the label pops out and the whole scene highlights.
 *   - Kept intentionally lightweight (no post-processing) so it runs on
 *     integrated GPUs and mobile.
 */

import { useRef, useState, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Icosahedron, Sphere, Html, Float } from '@react-three/drei';
import * as THREE from 'three';

type Satellite = {
  label: string;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  size: number;
  tilt: number;   // radians
  phase: number;  // radians
};

const SATELLITES: Satellite[] = [
  { label: 'Voice AI',     color: '#a855f7', orbitRadius: 2.5, orbitSpeed: 0.28, size: 0.18, tilt: 0.15,  phase: 0 },
  { label: 'Quantum',      color: '#22d3ee', orbitRadius: 3.1, orbitSpeed: 0.19, size: 0.16, tilt: 0.55,  phase: 1.2 },
  { label: 'Cloud Native', color: '#f472b6', orbitRadius: 3.6, orbitSpeed: 0.14, size: 0.20, tilt: -0.35, phase: 2.4 },
  { label: 'Web',          color: '#a3e635', orbitRadius: 2.1, orbitSpeed: 0.35, size: 0.14, tilt: 0.75,  phase: 3.8 },
  { label: 'DevOps',       color: '#fbbf24', orbitRadius: 4.2, orbitSpeed: 0.10, size: 0.22, tilt: -0.55, phase: 5.0 },
];

function Planet({ hovered }: { hovered: boolean }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_, dt) => {
    ref.current.rotation.y += dt * 0.25;
    ref.current.rotation.x += dt * 0.05;
  });

  return (
    <group>
      {/* soft violet halo */}
      <Sphere args={[1.75, 32, 32]}>
        <meshBasicMaterial color="#a855f7" transparent opacity={hovered ? 0.15 : 0.08} />
      </Sphere>
      {/* wire-frame core */}
      <Icosahedron ref={ref} args={[1.35, 3]}>
        <meshStandardMaterial
          color="#0b0b12"
          emissive={new THREE.Color('#7c3aed')}
          emissiveIntensity={hovered ? 0.9 : 0.55}
          roughness={0.35}
          metalness={0.7}
          wireframe
        />
      </Icosahedron>
      {/* inner glowing ball */}
      <Sphere args={[0.85, 32, 32]}>
        <meshStandardMaterial
          color="#12131d"
          emissive={new THREE.Color('#a855f7')}
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.9}
        />
      </Sphere>
    </group>
  );
}

function OrbitRing({ radius, tilt, color }: { radius: number; tilt: number; color: string }) {
  const points = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    const seg = 96;
    for (let i = 0; i <= seg; i++) {
      const t = (i / seg) * Math.PI * 2;
      arr.push(new THREE.Vector3(Math.cos(t) * radius, 0, Math.sin(t) * radius));
    }
    return arr;
  }, [radius]);

  const geom = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  return (
    <group rotation={[tilt, 0, tilt * 0.3]}>
      {/* @ts-ignore drei types are permissive here */}
      <line geometry={geom}>
        <lineBasicMaterial color={color} transparent opacity={0.25} />
      </line>
    </group>
  );
}

function SatelliteMesh({ sat, onPick, active }: {
  sat: Satellite;
  onPick: (label: string) => void;
  active: boolean;
}) {
  const ref = useRef<THREE.Group>(null!);
  const bodyRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * sat.orbitSpeed + sat.phase;
    const x = Math.cos(t) * sat.orbitRadius;
    const z = Math.sin(t) * sat.orbitRadius;
    ref.current.position.set(x, 0, z);
    // Tilt the orbit plane by rotating position around X axis.
    ref.current.position.applyEuler(new THREE.Euler(sat.tilt, 0, sat.tilt * 0.3));
    if (bodyRef.current) bodyRef.current.rotation.y += 0.02;
  });

  return (
    <group ref={ref}>
      <mesh
        ref={bodyRef}
        onPointerOver={(e) => { e.stopPropagation(); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { document.body.style.cursor = ''; }}
        onClick={(e) => { e.stopPropagation(); onPick(sat.label); }}
      >
        <sphereGeometry args={[sat.size, 20, 20]} />
        <meshStandardMaterial
          color={sat.color}
          emissive={new THREE.Color(sat.color)}
          emissiveIntensity={active ? 1.4 : 0.7}
          roughness={0.25}
          metalness={0.5}
        />
      </mesh>
      {active && (
        <Html distanceFactor={8} center style={{ pointerEvents: 'none' }}>
          <div
            className="whitespace-nowrap rounded-md px-2 py-1 text-[10px] font-mono font-medium"
            style={{
              color: '#0b0b12',
              background: sat.color,
              boxShadow: `0 0 20px ${sat.color}`,
            }}
          >
            {sat.label}
          </div>
        </Html>
      )}
    </group>
  );
}

function PointerTilt({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null!);
  const { pointer } = useThree();

  useFrame(() => {
    if (!group.current) return;
    const targetY = pointer.x * 0.6;
    const targetX = -pointer.y * 0.4;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05;
  });

  return <group ref={group}>{children}</group>;
}

export function AuroraWorld() {
  const [pickedIdx, setPickedIdx] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);

  const onPick = (label: string) => {
    const idx = SATELLITES.findIndex(s => s.label === label);
    setPickedIdx(idx === pickedIdx ? null : idx);
  };

  return (
    <div
      className="relative h-[440px] md:h-[520px] w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas camera={{ position: [0, 1.5, 7.5], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={['#0b0b12']} />
        <fog attach="fog" args={['#0b0b12', 8, 22]} />

        <ambientLight intensity={0.35} />
        <pointLight position={[6, 6, 6]}   intensity={40} color="#a855f7" distance={30} decay={2} />
        <pointLight position={[-6, -4, -6]} intensity={30} color="#22d3ee" distance={30} decay={2} />

        <Suspense fallback={null}>
          <Stars radius={40} depth={30} count={2200} factor={2.5} fade speed={0.5} />

          <PointerTilt>
            <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.35}>
              <Planet hovered={hovered || pickedIdx !== null} />
            </Float>

            {SATELLITES.map((sat, i) => (
              <group key={sat.label}>
                <OrbitRing radius={sat.orbitRadius} tilt={sat.tilt} color={sat.color} />
                <SatelliteMesh sat={sat} onPick={onPick} active={pickedIdx === i} />
              </group>
            ))}
          </PointerTilt>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.35}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>

      {/* HUD overlay */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4">
        <div className="flex justify-between items-start">
          <div className="pill">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            live · interactive
          </div>
          <div className="font-mono text-[10px] text-white/60 tracking-widest hidden md:block">
            DRAG · CLICK · EXPLORE
          </div>
        </div>
        <div className="text-[11px] font-mono text-white/70 max-w-xs">
          <span className="text-cyan-300">saqlainap@arena</span> ~ orbit tour · click any satellite to see the domain I work in.
        </div>
      </div>
    </div>
  );
}

export default AuroraWorld;
