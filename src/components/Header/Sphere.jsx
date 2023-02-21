          
            
import React, { useEffect } from "react";
import "../../css/TextShpere.css";
import "../../css/Home.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

function Sphere(){
  // Animation settings for Text Cloud
    useEffect(() => {
    const container = '.tagcloud';
    const texts = [
      'HTML',
      'CSS',
      'React Native',
      'JavaScript',
      'Django',
      'MySQL',
      'React',
      'Flutter',
      'Python',
      'ExpressJS',
      'C#',
      "Android Studio",
      "Java"
    ];

    const options = {
      radius: 300,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      useContainerInlineStyles:true,
      useItemInlineStyles:true,
      keep: true
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <>
      <div>
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default Sphere;
          
        