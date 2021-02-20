function GridCell({ title, text }) {
  return (
    <div className="p-8 border-2 border-gray-500 rounded-lg">
      <h3 className="mb-3 text-xl font-bold text-gray-200">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

const cells = [
  {
    title: `Do I need to know CSS?`,
    text: `This course is aimed at people that have some CSS knowledge and want to learn Tailwind. I do talk through CSS concepts and why we're using certain classes all throughout the course so you don't need to be a CSS expert.`,
  },
  {
    title: `Is there course support?`,
    text: `You can email me directly at any time and we also have a Discord communitywhere you gain exclusive channel access.`,
  },
  {
    title: `Can I use the code in my own projects?`,
    text: `Definitely! All of the code in this course is yours to use in your sites, apps, projects, whatever.`,
  },
  {
    title: `What if I don't like it?`,
    text: `I offer a lifetime refund policy. If you ever feel like you didn't gain value from this course, then you can request a refund from your course dashboard (totally automated process, no questions asked).`,
  },
  {
    title: `How do I login and view the course?`,
    text: `You can login at learn.better.dev. Use the login button in the top right.`,
  },
  {
    title: `Is there a student discount?`,
    text: `Yup! 50% off! Email me at chris@better.dev with your student id and I'll send you a discount code.`,
  },
];

function Faq() {
  return (
    <div className="py-32 text-gray-400 bg-gray-800">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {cells.map((cell, index) => (
            <GridCell {...cell} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
