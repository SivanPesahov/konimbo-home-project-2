import DemoComponent from "./demoComponent";

function LoopComponent() {
  const obj = { name: "name", description: "description", url: "url" };

  const arr = [obj, obj, obj, obj];

  return (
    <>
      {arr.map((obj) => {
        return (
          <DemoComponent
            name={obj.name}
            description={obj.description}
            url={obj.url}
          />
        );
      })}
    </>
  );
}

export default LoopComponent;
