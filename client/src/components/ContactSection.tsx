import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(5, {
    message: 'Message must be at least 5 characters.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-light-secondary/5 dark:bg-dark-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="inline-block font-poppins font-bold text-4xl md:text-5xl neo-brutal py-3 px-6 bg-light-primary dark:bg-dark-primary text-white transform -rotate-1">
            Get In Touch
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="neo-brutal bg-white dark:bg-dark-bg/90 p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="w-full p-3 neo-brutal-sm bg-light-bg dark:bg-dark-bg/80" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your.email@example.com" 
                            className="w-full p-3 neo-brutal-sm bg-light-bg dark:bg-dark-bg/80" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message here..." 
                            rows={5}
                            className="w-full p-3 neo-brutal-sm bg-light-bg dark:bg-dark-bg/80 resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="neo-brutal bg-light-primary dark:bg-dark-primary text-white font-bold py-3 px-6 w-full hover:translate-y-0 hover:translate-x-0 hover:bg-light-primary dark:hover:bg-dark-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="neo-brutal bg-white dark:bg-dark-bg/90 p-6 h-full">
              <h3 className="font-poppins font-bold text-2xl mb-6">Connect With Me</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="neo-brutal-sm bg-light-primary dark:bg-dark-primary text-white p-3 mr-4">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:saqlain@example.com" className="text-light-primary dark:text-dark-primary hover:underline">
                      saqlain@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="neo-brutal-sm bg-light-primary dark:bg-dark-primary text-white p-3 mr-4">
                    <i className="fab fa-github text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <a 
                      href="https://github.com/saqlainahmed" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-light-primary dark:text-dark-primary hover:underline"
                    >
                      github.com/saqlainahmed
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="neo-brutal-sm bg-light-primary dark:bg-dark-primary text-white p-3 mr-4">
                    <i className="fab fa-linkedin text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/saqlainahmed" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-light-primary dark:text-dark-primary hover:underline"
                    >
                      linkedin.com/in/saqlainahmed
                    </a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Find me on other platforms</h4>
                  <div className="flex gap-4">
                    <motion.a 
                      href="#" 
                      className="neo-brutal-sm bg-light-bg dark:bg-dark-bg p-3 text-xl" 
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <i className="fab fa-twitter"></i>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="neo-brutal-sm bg-light-bg dark:bg-dark-bg p-3 text-xl" 
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <i className="fab fa-instagram"></i>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="neo-brutal-sm bg-light-bg dark:bg-dark-bg p-3 text-xl" 
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <i className="fas fa-code"></i>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="neo-brutal-sm bg-light-bg dark:bg-dark-bg p-3 text-xl" 
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <i className="fab fa-medium"></i>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
