import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";
import { stripe } from "../../../services/stripe";

export async function saveSubscription(
  subscriptionId: string,
  customerId: string
) {
  //Get stripe customer id on database
  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(q.Match(q.Index("user_by_stripe_customer_id"), customerId))
    )
  );

  //Get subscription data of user on stripe
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  //Separate relevant data
  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  };

  //Crete new document on collection with the relevant data
  await fauna.query(
    q.Create(q.Collection("subscriptions"), { data: subscriptionData })
  );
}
