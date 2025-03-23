import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create HTTP server
  const httpServer = createServer(app);

  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body
      const result = contactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: 'Invalid form data', 
          errors: result.error.errors 
        });
      }
      
      // Save contact message
      const savedMessage = await storage.createContactMessage(result.data);
      
      return res.status(201).json({
        message: 'Your message has been sent successfully',
        id: savedMessage.id
      });
    } catch (error) {
      console.error('Error saving contact message:', error);
      return res.status(500).json({ 
        message: 'An error occurred while saving your message'
      });
    }
  });

  return httpServer;
}
