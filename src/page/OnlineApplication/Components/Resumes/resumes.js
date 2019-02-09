import React from 'react';

import classes from './resumes.module.css'
import Resume from './Resume/resume';

const resumes = (props) => {
    let arrayOfResumes = props.resumes.map((one,index)=>{
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
    
    if(props.addingResume){
        // arrayOfResumes.push(
        //     <button key={arrayOfResumes.length} className={classes.addResume2} onClick={props.addResumeClicked}>
        //         + Add Resume 2
        //     </button>
        // );
        // arrayOfResumes.push(
        //     <button key={arrayOfResumes.length} className={classes.addResume2} onClick={props.addResumeClicked}>
        //         + Add Resume 2
        //     </button>
        // );


        arrayOfResumes.push(
            <span key={arrayOfResumes.length}><div className={classes.divtest}>
                <button className={classes.buttontest}>button1</button>
                <button className={classes.buttontest}>button2</button>
            </div></span>
        );

        // arrayOfResumes.push(
        //     <button key={arrayOfResumes.length} className={classes.addResume} onClick={props.addResumeClicked}>
        //         + Add Resume 2
        //     </button>
        // );

    }else{
        arrayOfResumes.push(
            <button key={arrayOfResumes.length} className={classes.addResume} onClick={props.addResumeClicked}>
                + Add Resume
            </button>
        );
    }

    // arrayOfResumes.push(
    //     <button key={arrayOfResumes.length} className={classes.addResume} onClick={props.addResumeClicked}>
    //         + Add Resume
    //     </button>
    // );

    // arrayOfResumes.push(
    //     <div key={arrayOfResumes.length} className={classes.addingResume}>
    //         <button>button1</button>
    //         <button>button2</button>
    //     </div>
    // );
    
    
    

    return (
        <div className={classes.resumes}>
            {arrayOfResumes}
        </div>
    );
};

export default resumes;