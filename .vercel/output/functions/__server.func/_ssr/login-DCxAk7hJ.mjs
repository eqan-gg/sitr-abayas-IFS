import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as BRAND } from "./router-BLbcut6A.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function LoginPage() {
  const [mode, setMode] = reactExports.useState("signin");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-md mx-auto px-6 py-20 md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl", children: mode === "signin" ? "Welcome back" : "Create account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: mode === "signin" ? `Sign in to your ${BRAND.name} account` : `Join the ${BRAND.name} private list` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "space-y-5", children: [
      mode === "signup" && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "mt-2 w-full bg-transparent border-b border-border focus:border-ink py-2 outline-none" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, className: "mt-2 w-full bg-transparent border-b border-border focus:border-ink py-2 outline-none" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", required: true, className: "mt-2 w-full bg-transparent border-b border-border focus:border-ink py-2 outline-none" })
      ] }),
      mode === "signin" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-xs text-muted-foreground hover:text-ink underline underline-offset-4", children: "Forgot password?" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full bg-ink text-cream py-4 text-xs uppercase tracking-[0.28em] hover:bg-ink/90", children: mode === "signin" ? "Sign In" : "Create Account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center my-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-background px-3 text-xs uppercase tracking-[0.2em] text-muted-foreground relative z-10", children: "or continue with" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-0 top-1/2 h-px bg-border" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "border border-border py-3 text-xs uppercase tracking-[0.2em] hover:border-ink", children: "Google" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "border border-border py-3 text-xs uppercase tracking-[0.2em] hover:border-ink", children: "Apple" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground mt-8", children: [
      mode === "signin" ? `New to ${BRAND.name}? ` : "Already have an account? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode(mode === "signin" ? "signup" : "signin"), className: "text-ink underline underline-offset-4", children: mode === "signin" ? "Create an account" : "Sign in" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-ink", children: "← Back to home" }) })
  ] });
}
export {
  LoginPage as component
};
