import React from 'react';

import classes from './resumes.module.css'
import Resume from './Resume/resume';

const resumes = (props) => {
    let arrayOfResumes = props.resumes.map((one,index)=>{
        // if (index == arrayOfResumes.length-1){
        //     return (
        //         <AddResume/>
        //     );
        // }
        return (
            <Resume
                key={index}
                id={index}
                exportClicked={props.exportClicked} 
                deleteClicked={props.deleteClicked}
                icon={one.icon}
                name={one.name}
                language={one.language}
                lastEdit={one.lastEdit}
                selectHandler={props.selectHandler}
                selected={props.selected}
            />
        );
    });
    arrayOfResumes.push(
        <button key={arrayOfResumes.length} className={classes.addResume} onClick={props.addResumeClicked}>
            + Add Resume
        </button>
    );
    return (
        <div className={classes.resumes}>
            {arrayOfResumes}
        </div>
    );
};

export default resumes;