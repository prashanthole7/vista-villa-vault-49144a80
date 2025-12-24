import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEOHead } from "@/components/SEOHead";
import { toast } from "@/hooks/use-toast";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Property Inquiry from PropIndia Website");
    const body = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:info@propindia.com?subject=${subject}&body=${body}`;
    toast({
      title: "Opening email client",
      description: "Please send the email to complete your inquiry."
    });
  };
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in properties on PropIndia. Please help me find my dream home.");
  return <>
      <SEOHead title="Contact Us" description="Get in touch with PropIndia for property inquiries. Call, WhatsApp, or email us. Our team is ready to help you find your dream home." />
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-12">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have questions about a property or need help finding your dream home? 
                Our team is here to assist you every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input id="name" placeholder="Enter your name" value={formData.name} onChange={e => setFormData({
                      ...formData,
                      name: e.target.value
                    })} required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={e => setFormData({
                      ...formData,
                      phone: e.target.value
                    })} required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Your Message
                      </label>
                      <Textarea id="message" placeholder="Tell us what you're looking for..." rows={4} value={formData.message} onChange={e => setFormData({
                      ...formData,
                      message: e.target.value
                    })} required />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                {/* Quick Contact */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a href="tel:+919876543210" className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Call Us</div>
                        <div className="text-sm text-muted-foreground">+91 8999816425</div>
                      </div>
                    </a>

                    <a href={`https://wa.me/918999816425?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="p-3 rounded-full bg-whatsapp/10">
                        <MessageCircle className="h-5 w-5 text-whatsapp" />
                      </div>
                      <div>
                        <div className="font-medium">WhatsApp</div>
                        <div className="text-sm text-muted-foreground">Chat with us instantly</div>
                      </div>
                    </a>

                    <a href="mailto:prashanthole7@gmail.com" className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">prashanthole7@gmail.com</div>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                {/* Office Location */}
                <Card>
                  <CardHeader>
                    <CardTitle>Our Office</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">PropIndia Headquarters</div>
                        <div className="text-sm text-muted-foreground">
                          123 Business Hub, Level 5<br />
                          Andheri East, Mumbai 400069<br />
                          Maharashtra, India
                        </div>
                      </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <MapPin className="h-8 w-8 mx-auto mb-2" />
                        <p className="text-sm">Map integration placeholder</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle>Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium">10:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium">By Appointment</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>;
}