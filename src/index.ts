export type AsyncResult<T> = [Error, null] | [null, T];

/**
 * Wraps a Promise and returns a tuple [Error | null, Result | null].
 */
export async function safeAsync<T>(promise: Promise<T>): Promise<AsyncResult<T>> {
  try {
    const result = await promise;
    return [null, result];
  } catch (err: any) {
    return [err, null];
  }
}