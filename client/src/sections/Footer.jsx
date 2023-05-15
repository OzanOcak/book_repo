function Footer() {
  const today = new Date();

  return (
    <footer className="h-[4rem] flex justify-center py-4 items-center border-t border-t-black bg-blue-400">
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
