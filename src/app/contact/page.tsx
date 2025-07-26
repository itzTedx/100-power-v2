"use client";

import Link from "next/link";

import { IconArrowUpRight } from "@tabler/icons-react";
import { Building2, Mail, Phone } from "lucide-react";

import { IconUserQuestion } from "@/assets/icons";
import { Faqs } from "@/components/sections/faq";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/features/contact/components/contact-form";

export default function ContactPage() {
  return (
    <main className="container max-w-7xl space-y-6 py-12 md:space-y-16">
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

      <section id="contact" className="grid scroll-my-28 gap-8 lg:grid-cols-2">
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
            <ContactForm />
          </CardContent>
        </Card>
      </section>
      <section className="space-y-6 py-8 md:space-y-8 md:py-12">
        <Badge>
          <IconUserQuestion />
          Frequently Asked Questions
        </Badge>
        <Separator />
        <div className="flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:gap-9">
          <h2 className="font-helvetica inline-flex items-center gap-3 text-4xl font-medium md:text-5xl">
            Have any questions?
          </h2>

          <Button className="w-fit" variant="secondary" asChild>
            <Link href="#contact">
              Ask as anything <IconArrowUpRight />
            </Link>
          </Button>
        </div>
        <Faqs />
      </section>
    </main>
  );
}
