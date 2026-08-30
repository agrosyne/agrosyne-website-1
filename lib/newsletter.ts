export type NewsletterSubscriber = {
  id: string;
  email: string;
  name: string;
  source: string;
  subscribedAt: string;
};

let subscribers: NewsletterSubscriber[] = [];

/*
 * GET ALL SUBSCRIBERS
 */

export function getSubscribers(): NewsletterSubscriber[] {
  return subscribers;
}

/*
 * ADD SUBSCRIBER
 */

export function addSubscriber(
  email: string,
  name = "",
  source = "Website"
): NewsletterSubscriber {
  const normalizedEmail = email.trim().toLowerCase();

  /*
   * Prevent duplicate subscriptions.
   */

  const existingSubscriber = subscribers.find(
    (subscriber) =>
      subscriber.email.toLowerCase() === normalizedEmail
  );

  if (existingSubscriber) {
    return existingSubscriber;
  }

  const subscriber: NewsletterSubscriber = {
    id: crypto.randomUUID(),
    email: normalizedEmail,
    name: name.trim(),
    source,
    subscribedAt: new Date().toISOString(),
  };

  subscribers = [subscriber, ...subscribers];

  return subscriber;
}

/*
 * DELETE SUBSCRIBER
 */

export function deleteSubscriber(
  id: string
): boolean {
  const existingLength = subscribers.length;

  subscribers = subscribers.filter(
    (subscriber) => subscriber.id !== id
  );

  return subscribers.length !== existingLength;
}