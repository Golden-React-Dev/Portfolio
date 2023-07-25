import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Senior Full-Stack Developer (PropertyRadar)</h5>
            <p className="font-semibold">Jan 2022 - Apr 2023 (1 year 4 months)</p>
            <p className="my-1">Initiated a front-end project to implement a Small Business Support data visualization page and comparison page and set up React.js/Next.js and Material UI for an open source data visualization tool</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Senior Back-End Developer (Callstats.io)</h5>
            <p className="font-semibold">May 2020 - Sep 2021 (1 year 5 months)</p>
            <p className="my-1">Created a new backend using Go and Google Bigtable to build slice-and-dice customer reports based on schema-free customer data, implemented end-to-end encryption for the end-user data collection pipeline using Java, Go, and resolved issues with non-even load balancing of the GRPC connections inside of the Kubernetes cluster</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Full-Stack Developer (Invitae)</h5>
            <p className="font-semibold">Jan 2019 - Mar 2020 (1 year 3 months)</p>
            <p className="my-1">Developed the Arc Reactor front-end framework, implemented the PHP Laravel back-end of the admin dashboard, and established WebSocket communication between the back-end and front-end using MessagePack as the binary serialization format</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Front-End Developer (TRINITY MEDIA LLC)</h5>
            <p className="font-semibold">Jan 2017 - Oct 2018 (1 year 10 months)</p>
            <p className="my-1">Implemented front-end pages as per design with pixel-perfect quality, utilizing HTML, CSS, Javascript, jQuery, and React.js</p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Ss. Cyril and Methodius University (2012-2016)</p>
            <p className="my-3">
              Bachelor of Science - BS, Computer Science
            </p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
