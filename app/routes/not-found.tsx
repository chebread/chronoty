// export default function ErrorPage({
//   message,
//   details,
//   stack,
// }: {
//   message: string;
//   details: string;
//   stack: any;
// }) {
//   return (
//     <main>
//       <h1>{message}</h1>
//       <p>{details}</p>
//       {stack && (
//         <pre>
//           <code>{stack}</code>
//         </pre>
//       )}
//     </main>
//   );
// }

export default function ErrorPage({}) {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
}
