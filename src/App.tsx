import { FormEvent, useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(0);
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(1);
  };
  return (
    <div className="bg-dark-slate-grey min-h-screen md:p-4">
      {step === 0 && (
        <div className="bg-white container mx-auto max-w-3xl md:p-4 md:rounded-2xl flex flex-wrap-reverse gap-4">
          <div className="space-y-4 flex flex-col justify-center px-8 md:px-4 py-8 grow basis-80">
            <h2 className="text-4xl font-bold text-dark-slate-grey">
              Stay updated!
            </h2>

            <p>Join 60,000+ product managers receiving monthly updates on:</p>

            <ul className="list-image-[url(/images/icon-list.svg)] list-inside">
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label htmlFor="email" className="text-sm">
                  <b>Email address</b>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="email@company.com"
                  className="border p-2 rounded w-full"
                  required
                  value={email}
                  onChange={handleChange}
                />
              </div>

              <button
                className="bg-charcoal-grey text-white px-8 py-2 rounded-lg w-full hover:bg-gradient-to-r from-tomato to-orange-500 shadow-lg hover:shadow-tomato/50"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <img
            src="images/illustration-sign-up-desktop.svg"
            alt="Sign Up Illustration"
            className="w-full aspect-video object-cover rounded-2xl hidden md:inline-block max-w-xs"
          />
          <img
            src="images/illustration-sign-up-mobile.svg"
            alt="Sign Up Illustration"
            className="w-full aspect-video object-cover inline-block rounded-b-2xl md:hidden"
          />
        </div>
      )}
      {step === 1 && (
        <div className="bg-white container max-w-lg mx-auto p-8 rounded-2xl space-y-4 text-xl">
          <img src="images/icon-success.svg" alt="check" className="w-12" />
          <h2 className="text-3xl font-bold text-dark-slate-grey">
            Thanks for subscribing!
          </h2>

          <p>
            A confirmation email has been sent to {email}. Please
            open it and click the button inside to confirm your subscription.
          </p>

          <button
            className="bg-charcoal-grey text-white px-8 py-2 rounded-lg w-full hover:bg-gradient-to-r from-tomato to-orange-500 shadow-lg hover:shadow-tomato/50"
            onClick={() => setStep(0)}
          >
            Dismiss message
          </button>
        </div>
      )}
      <div className="block text-center mt-4 text-white px-8">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-blue-400"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="#" className="text-blue-400">
          Edgar Avila
        </a>
        .
      </div>
    </div>
  );
}

export default App;
