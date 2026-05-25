import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({ meta: [{ title: "Sign In — Noor" }] }),
});

function LoginPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  return (
    <section className="max-w-md mx-auto px-6 py-20 md:py-28">
      <div className="text-center mb-10">
        <h1 className="font-serif text-4xl">{mode === "signin" ? "Welcome back" : "Create account"}</h1>
        <p className="text-sm text-muted-foreground mt-2">
          {mode === "signin" ? "Sign in to your Noor account" : "Join the Noor private list"}
        </p>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
        {mode === "signup" && (
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Name</span>
            <input className="mt-2 w-full bg-transparent border-b border-border focus:border-ink py-2 outline-none" />
          </label>
        )}
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</span>
          <input type="email" required className="mt-2 w-full bg-transparent border-b border-border focus:border-ink py-2 outline-none" />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Password</span>
          <input type="password" required className="mt-2 w-full bg-transparent border-b border-border focus:border-ink py-2 outline-none" />
        </label>
        {mode === "signin" && (
          <div className="text-right">
            <a href="#" className="text-xs text-muted-foreground hover:text-ink underline underline-offset-4">Forgot password?</a>
          </div>
        )}
        <button className="w-full bg-ink text-cream py-4 text-xs uppercase tracking-[0.28em] hover:bg-ink/90">
          {mode === "signin" ? "Sign In" : "Create Account"}
        </button>
        <div className="relative text-center my-6">
          <span className="bg-background px-3 text-xs uppercase tracking-[0.2em] text-muted-foreground relative z-10">or continue with</span>
          <span className="absolute inset-x-0 top-1/2 h-px bg-border" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button type="button" className="border border-border py-3 text-xs uppercase tracking-[0.2em] hover:border-ink">Google</button>
          <button type="button" className="border border-border py-3 text-xs uppercase tracking-[0.2em] hover:border-ink">Apple</button>
        </div>
      </form>
      <p className="text-center text-sm text-muted-foreground mt-8">
        {mode === "signin" ? "New to Noor? " : "Already have an account? "}
        <button onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="text-ink underline underline-offset-4">
          {mode === "signin" ? "Create an account" : "Sign in"}
        </button>
      </p>
      <p className="text-center text-xs text-muted-foreground mt-10">
        <Link to="/" className="hover:text-ink">← Back to home</Link>
      </p>
    </section>
  );
}