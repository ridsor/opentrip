interface Props {
  terms_conditions: string;
}

export default function TermsConditions({ terms_conditions }: Props) {
  return (
    <article>
      <div className="pt-[75px]">
        <h2 className="font-bold text-2xl mb-3 tracking-wide">
          Syarat dan Ketentuan
        </h2>
        <p className="text-lg font-medium">{terms_conditions}</p>
      </div>
    </article>
  );
}
