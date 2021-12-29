export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Vercel/Remix bug</h1>
      <p>The image below is fetched by making a request to the <code>/unsplash</code> resource route which in turn makes a request to <code>unsplash.com</code>.</p>
      <p>This works locally, but not when deployed to Vercel.</p>
      <img src="/unsplash" />
      <p>
        Photo by{' '}
        <a href="https://unsplash.com/photos/fbhqOlTZjro">Ümit Yıldırım</a>
      </p>
    </div>
  );
}
