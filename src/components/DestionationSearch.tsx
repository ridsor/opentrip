"use client";

interface Props {
  children: React.ReactNode;
}

const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(e);
};

export default function DestinationSearch(props: Props) {
  return (
    <form method="POST" onSubmit={handleSearch}>
      {props.children}
    </form>
  );
}
