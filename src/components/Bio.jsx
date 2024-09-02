import { BIO } from "../constants";

const Bio = () => {
  return (
    <section className="flex max-w-4xl flex-col gap-12 pt-20" id="bio">
      <h2 className="text-center text-3xl lg:text-4xl">Bio</h2>
      <div>
        {BIO.map((bio, index) => (
          <p key={index} className="mb-4 text-lg lg:text-xl md:text-justify">
            {bio}
          </p>
        ))}
      </div>
    </section>
  )
}

export default Bio;