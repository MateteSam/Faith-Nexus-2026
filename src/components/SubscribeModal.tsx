import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const SubscribeModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // For now store locally — replace with API/Mailchimp later
    const list = JSON.parse(localStorage.getItem("subscribers") || "[]");
    list.push({ email, date: new Date().toISOString() });
    localStorage.setItem("subscribers", JSON.stringify(list));
    setSubmitted(true);
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-md">Notify Me</button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Get notified about the Magazine</DialogTitle>
            <DialogDescription>We'll let you know when the new improved issues are published.</DialogDescription>
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
              <p className="text-sm">Thanks — we'll notify you when the magazine is available.</p>
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
