import { db } from '@services/database';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const id = req.query.id as string;
  try {
    if (req.method === 'POST') {
      const toSubmit = req.body;
      const data = await db.in('users').add(toSubmit, id);
      return res.status(201).send(data);
    }
    if (req.method === 'GET') {
      const data = await db.in('users').get(id);
      return res.status(200).send(data);
    }
    if (req.method === 'PUT') {
      const toSubmit = req.body;
      const data = await db.in('users').put(id, toSubmit);
      return res.status(201).send(data);
    }
    if (req.method === 'DELETE') {
      const data = await db.in('users').del(id);
      return res.status(201).send(data);
    }
    return res.status(404).end();
  } catch (e) {
    return res.status(400).end();
  }
}
