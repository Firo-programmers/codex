"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Dribbble,
  Github,
  Linkedin,
  Mail,
  Sparkles
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const projects = [
  {
    title: "Nova Commerce",
    description:
      "A headless storefront experience with dynamic personalization and one-click checkout.",
    tags: ["Next.js", "Design Systems", "Stripe"],
    link: "#"
  },
  {
    title: "Pulse Analytics",
    description:
      "A motion-driven data story that turns KPI reviews into interactive journeys.",
    tags: ["Framer Motion", "Charts", "SaaS"],
    link: "#"
  },
  {
    title: "Glow Wellness",
    description:
      "A brand refresh and mobile-first booking flow for a boutique studio.",
    tags: ["Brand", "UX", "Mobile"],
    link: "#"
  }
];

const timeline = [
  {
    role: "Lead Product Designer",
    company: "Aurora Labs",
    period: "2022 — Present",
    summary: "Own the design system and collaborate with engineering on rapid releases."
  },
  {
    role: "Senior Experience Designer",
    company: "MotionWorks",
    period: "2020 — 2022",
    summary: "Built storytelling dashboards and shipping accessible UI kits."
  },
  {
    role: "Visual Designer",
    company: "Studio Echo",
    period: "2018 — 2020",
    summary: "Crafted brand systems and campaign landing experiences."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="bg-background">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 py-16">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-10"
        >
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" />
              </span>
              Avery Brooks
            </div>
            <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              <a className="hover:text-foreground" href="#projects">
                Projects
              </a>
              <a className="hover:text-foreground" href="#about">
                About
              </a>
              <a className="hover:text-foreground" href="#contact">
                Contact
              </a>
            </div>
            <Button variant="secondary" size="sm">
              Download CV
            </Button>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col gap-6">
              <Badge className="w-fit">Available for freelance</Badge>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Designing human-centered digital products with a
                <span className="gradient-text"> modern, cinematic edge</span>.
              </h1>
              <p className="text-lg text-muted-foreground">
                I’m Avery, a product designer blending strategic UX with motion-driven
                interactions. I partner with ambitious teams to craft delightful,
                conversion-ready experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>
                  Let’s collaborate <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="secondary">View case studies</Button>
              </div>
              <div className="flex items-center gap-5 text-muted-foreground">
                <a className="hover:text-foreground" href="https://github.com">
                  <Github className="h-5 w-5" />
                </a>
                <a className="hover:text-foreground" href="https://dribbble.com">
                  <Dribbble className="h-5 w-5" />
                </a>
                <a className="hover:text-foreground" href="https://linkedin.com">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_55%)]" />
              <div className="relative flex h-full flex-col justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Snapshot
                  </p>
                  <p className="mt-3 text-2xl font-semibold">
                    120+ shipped experiences across fintech, wellness, and AI.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl bg-background/70 p-4">
                    <p className="text-muted-foreground">Clients</p>
                    <p className="mt-2 text-2xl font-semibold">38</p>
                  </div>
                  <div className="rounded-2xl bg-background/70 p-4">
                    <p className="text-muted-foreground">Retention</p>
                    <p className="mt-2 text-2xl font-semibold">94%</p>
                  </div>
                  <div className="rounded-2xl bg-background/70 p-4">
                    <p className="text-muted-foreground">Awards</p>
                    <p className="mt-2 text-2xl font-semibold">12</p>
                  </div>
                  <div className="rounded-2xl bg-background/70 p-4">
                    <p className="text-muted-foreground">Launches</p>
                    <p className="mt-2 text-2xl font-semibold">56</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.header>

        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-10"
        >
          <div>
            <h2 className="section-title">Featured projects</h2>
            <p className="section-subtitle">
              A blend of product thinking, UI craft, and delightful motion.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="flex h-full flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="ghost" className="px-0">
                    View case study <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="section-title">Design philosophy</h2>
              <p className="section-subtitle">
                I translate complex ideas into confident, elegant product moments.
              </p>
            </div>
            <p className="text-muted-foreground">
              My work lives at the intersection of brand, UX, and creative direction.
              I build design systems that scale and craft motion to highlight key
              interactions. From early-stage startups to global teams, I help ship
              polished experiences with measurable impact.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Design Systems</CardTitle>
                  <CardDescription>
                    Modular components with clear usage and documentation.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Motion & Story</CardTitle>
                  <CardDescription>
                    Framer Motion micro-interactions that feel alive.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-card/70 p-6">
            <h3 className="text-xl font-semibold">Experience</h3>
            <div className="flex flex-col gap-4">
              {timeline.map((item) => (
                <div
                  key={item.role}
                  className="rounded-2xl border border-border/60 bg-background/70 p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{item.role}</p>
                    <span className="text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                  <p className="mt-2 text-sm">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-primary/5 to-accent/10 p-8"
        >
          <div>
            <h2 className="section-title">Let’s build something iconic</h2>
            <p className="section-subtitle">
              Share your idea and I’ll follow up within 48 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button className="min-w-[180px]">
              <Mail className="mr-2 h-4 w-4" />
              hello@avery.design
            </Button>
            <Button variant="secondary" className="min-w-[180px]">
              Book a call
            </Button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
