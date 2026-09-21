import Link from 'next/link';

export default function AdminLoginPage() {
  return (
    <div className="mx-auto max-w-md px-5 py-24 md:px-8">
      <div className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-navy/10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">Secure access</p>
        <h1 className="mt-3 text-3xl font-bold text-navy">Admin sign in</h1>
        <p className="mt-3 text-slate-700">Authentication will protect school content and management tools in the next integration step.</p>
        <form className="mt-8 space-y-4" action="/api/auth/signin" method="post">
          <label className="block text-sm font-semibold text-navy">
            Email
            <input name="email" type="email" required className="mt-2 w-full rounded-xl border border-navy/15 px-4 py-3 font-normal outline-none focus:border-blue" />
          </label>
          <label className="block text-sm font-semibold text-navy">
            Password
            <input name="password" type="password" required className="mt-2 w-full rounded-xl border border-navy/15 px-4 py-3 font-normal outline-none focus:border-blue" />
          </label>
          <button type="submit" className="w-full rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">Sign in</button>
        </form>
        <Link href="/" className="mt-6 inline-flex text-sm font-semibold text-blue">← Return to website</Link>
      </div>
    </div>
  );
}
