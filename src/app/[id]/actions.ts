'use server';

import { db } from '@/db';
import { tasks } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function deleteTask(taskId: number) {
  await db.delete(tasks).where(eq(tasks.id, taskId));
}

export async function completeTask(taskId: number, isCompleted: boolean) {
  await db
    .update(tasks)
    .set({
      isCompleted,
    })
    .where(eq(tasks.id, taskId));
}
