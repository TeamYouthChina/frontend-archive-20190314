import React from 'react';

import classes from './resumes.module.css'
import Resume from './Resume/resume';

const resumes = (props) => {
    let arrayOfResumes = Array();
    arrayOfResumes = props.resumes.map((one,index)=>{
        return (
            <div key={index} className={classes.resumeWrapper}>
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
            </div>
            
        );
    });
    
    if(props.addingResume){
        arrayOfResumes.push(
            <div key={arrayOfResumes.length} className={[classes.resumeWrapper, classes.dotted].join(' ')}>
                <div className={classes.centerButton}>
                    <button 
                        className={classes.halfButton}
                        onClick={props.typeResumeHander}>
                        Type Resume
                    </button> 
                    <button 
                        className={classes.halfButton}
                        onClick={props.uploadResuemHandler}>
                        Upload From Device
                    </button>
                </div> 
        </div>
        )
    } else {
        arrayOfResumes.push(
            <div key={arrayOfResumes.length} className={classes.resumeWrapper}>
                <button key={arrayOfResumes.length} className={classes.addResume} onClick={props.addResumeClicked}>
                    + Add Resume
                </button> 
            </div>  
        );
    }
    
    

    return (
        <div className={classes.resumes}>
            {arrayOfResumes}
            {/* <div key={arrayOfResumes.length} className={classes.resumeWrapper}>
                <button key={arrayOfResumes.length} className={classes.addResume} onClick={props.addResumeClicked}>
                    + Add Resume
                </button> 
            </div> */}
        </div>
    );
};

export default resumes;