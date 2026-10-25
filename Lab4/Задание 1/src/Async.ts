export function mock(number: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number);
        }, number);
    });
}

export async function getData(): Promise<number[]> {
    const results = await Promise.all([
        mock(100),
        mock(200),
        mock(300)
    ]);
    return results;
}

export async function catchException(): Promise<string> {
    try {
        await Promise.reject(new Error('my error'));
        return ''; // Нужно для TypeScript
    } catch (err: any) {
        return err.message;
    }
}
