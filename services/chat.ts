export const fetchMessages = async (): Promise<Message[]> => {
  const res = await fetch(
    `https://chatty.doodle-test.com/api/chatty/v1.0/?token=${process.env.NEXT_PUBLIC_ENV_TOKEN}`,
  );
  const output = await res.json();
  return output;
};

export const sendMessage = async ({
  message,
  author,
}: {
  message: string;
  author: string;
}) => {
  const res = await fetch('https://chatty.doodle-test.com/api/chatty/v1.0', {
    method: 'POST',
    body: JSON.stringify({
      message,
      author,
    }),
    headers: {
      'Content-Type': 'application/json',
      token: process.env.NEXT_PUBLIC_ENV_TOKEN as string,
    },
  });
  const output = await res.json();
  return output;
};
