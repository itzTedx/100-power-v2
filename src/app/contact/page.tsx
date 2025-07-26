"use client";

import { Building2, Mail, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="container max-w-7xl space-y-12 py-12">
      <div className="space-y-2">
        <Badge>Contact Us</Badge>
        <Separator className="my-6" />
        <div className="grid grid-cols-2 gap-6">
          <h1 className="font-helvetica text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Get in Touch
          </h1>
          <p className="text-muted-foreground max-w-[42rem] text-lg">
            Have questions about our products or want to discuss how 100 Power
            can help your operations? Our team is ready to assist.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Reach out to us directly through any of these channels.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="text-primary h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Email</p>
                <p className="text-muted-foreground">contact@100power.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-primary h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Phone</p>
                <p className="text-muted-foreground">+1 (555) 000-0000</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Building2 className="text-primary h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Office</p>
                <p className="text-muted-foreground">
                  100 Power Trading LLC
                  <br />
                  123 Industrial Drive
                  <br />
                  Houston, TX 77001
                  <br />
                  United States
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Acme Inc." required />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject (Optional)</Label>
                <Input id="subject" placeholder="What's this regarding?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
