
import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Contact Me</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600">Get in touch for opportunities or collaborations</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 animate-slide-up">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-lg mr-4">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">Email</h4>
                  <a href="mailto:sahshivam73200@gmail.com" className="text-gray-800 hover:text-accent transition-colors">
                    sahshivam73200@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-lg mr-4">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">Phone</h4>
                  <a href="tel:+916207237277" className="text-gray-800 hover:text-accent transition-colors">
                    +91 6207237277
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-lg mr-4">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">Location</h4>
                  <p className="text-gray-800">
                    48, Sector 36, Greater Noida-201308
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-lg mr-4">
                  <Linkedin className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/shivam-kumar-05428726" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-accent transition-colors"
                  >
                    shivam-kumar-05428726
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent transition-colors"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent transition-colors"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex justify-center items-center px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
