export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-3 absolute bottom-0">
      <aside>
        <p className="text-accent">
          Dev by Kenkyo {new Date().getFullYear()} - Github
        </p>
      </aside>
    </footer>
  );
}
