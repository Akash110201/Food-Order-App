const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl p-4 m-4">
        Hamse Baat Karna Chahte ho?
      </h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-3"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-3"
          placeholder="message"
        />
        <button className="border border-black p-2 m-3 bg-black text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
