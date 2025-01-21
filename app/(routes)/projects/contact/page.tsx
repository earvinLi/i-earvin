// External Dependencies
import { unstable_cache as cache } from 'next/cache';

// Internal Dependencies
import { prisma } from '@/utilities/prismaUtils/prismaClient';

// Local Variables
// Todo: check out Prisma cache strategies with https://www.prisma.io/docs/accelerate/api-reference#cachestrategy
const getCachedContactMeMessages = cache(() => prisma.contactMeMessage.findMany());

// Todo: check out about edge functions and https://www.prisma.io/docs/orm/overview/databases/postgresql#using-the-node-postgres-driver
// export const runtime = 'edge';

// Component Definition
export default async function Contact() {
  // Todo: check out Prisma pagination solutions with https://www.prisma.io/docs/orm/prisma-client/queries/pagination
  const contactMeMessages = await getCachedContactMeMessages();

  return (
    <ul>
      {contactMeMessages.map((contactMeMessage) => <li>{contactMeMessage.contactMessage}</li>)}
    </ul>
  );
}
