import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type SubscribeModalProps = {
  triggerText?: string;
  title?: string;
  description?: string;
};

const SubscribeModal: React.FC<SubscribeModalProps> = ({
  triggerText = "Notify Me",
  title = "Get notified",
  description = "We'll let you know when updates are available.",
}) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // POST to serverless subscribe endpoint (stub). Replace with real provider integration.
    (async () => {
      try {
        const resp = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        if (resp.ok) {
          setSubmitted(true);
        } else {
          const data = await resp.json().catch(() => ({}));
          alert(data.error || 'Subscription failed. Please try again later.');
        }
      } catch (err) {
        // Fallback to local storage if network request fails
        const list = JSON.parse(localStorage.getItem("subscribers") || "[]");
        list.push({ email, date: new Date().toISOString() });
        localStorage.setItem("subscribers", JSON.stringify(list));
        setSubmitted(true);
      }
    })();
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-md">{triggerText}</button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@domain.com"
                className="w-full px-3 py-2 rounded-md bg-input border border-border"
              />
              <DialogFooter>
                <div className="flex gap-2">
                  <Button type="submit">Subscribe</Button>
                  <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
                </div>
              </DialogFooter>
            </form>
          ) : (
            <div className="mt-4">
              <p className="text-sm">Thanks — we'll notify you when updates are available.</p>
              <div className="mt-4 flex justify-end">
                <Button onClick={() => setOpen(false)}>Close</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubscribeModal;
