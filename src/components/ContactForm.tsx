export function ContactForm({ email }: { email: string }) {
  return (
    <form
      action={`https://formsubmit.co/${email}`}
      method="POST"
      className="flex w-full flex-col gap-4"
    >
      <input type="hidden" name="_subject" value="Tonedeaf website enquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <label className="flex flex-col gap-2 text-sm">
        <span className="uppercase tracking-[0.2em]">Name</span>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          className="border border-black/25 bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-black"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm">
        <span className="uppercase tracking-[0.2em]">Email</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className="border border-black/25 bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-black"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm">
        <span className="uppercase tracking-[0.2em]">Mobile</span>
        <input
          type="tel"
          name="mobile"
          required
          autoComplete="tel"
          inputMode="tel"
          className="border border-black/25 bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-black"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm">
        <span className="uppercase tracking-[0.2em]">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="resize-y border border-black/25 bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-black"
        />
      </label>

      <button
        type="submit"
        className="mt-2 w-fit cursor-pointer border border-black bg-black px-6 py-3 text-sm font-medium text-brand transition-transform hover:-translate-y-0.5"
      >
        Send message
      </button>
    </form>
  );
}
