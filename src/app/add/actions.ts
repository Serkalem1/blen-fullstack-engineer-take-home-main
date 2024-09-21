'use server';

import { db } from '@/db';
import { tasks } from '@/db/schema';

export async function addTask(data: { title: string; description: string; dueDate: string }) {
  const { title, description, dueDate } = data;

  if (!title || !description || !dueDate) {
    throw new Error('All fields are required.');
  }

  await db.insert(tasks).values({
    title,
    description,
    dueDate: new Date(dueDate).toISOString(),
    isCompleted: false,
  });
}
