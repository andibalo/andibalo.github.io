import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    expNodeActive: {
        backgroundColor: '#255275 !important',
        '& div:first-child': {
            background: '#1772BA !important',
        },
        '& div:last-child': {
            background: '#0F87E6 !important',
        }
    },
    expNode: {
        position: "relative",
        width: "70px",
        height: "70px",
        left: '-15px',
        top: '-10px',
        borderRadius: "50%",
        backgroundColor: '#7E7E7E',
        zIndex: 3,
        '& div:first-child': {
            position: 'absolute',
            width: "100%",
            height: '100%',
            borderRadius: "50%",
            background: '#CECECE',
            transform: 'scale(0.9)'
        },
        '& div:last-child': {
            position: 'absolute',
            width: "100%",
            height: '100%',
            borderRadius: "50%",
            background: '#FFFFFF',
            transform: 'scale(0.8)'
        }
    },
    timelineWrapper: {
        '&::before': {
            background: '#7C7C77'
        }
    },
    verticalTimelineElement: {
        '& .vertical-timeline-element-date': {
            fontFamily: 'Raleway'
        }
    },
    verticalTimelineTitle: {
        color: '#333332',
        fontFamily: 'Open Sans',
        marginBottom: theme.spacing(0.5)
    },
    verticalTimelineSubtitle: {
        fontFamily: 'Open Sans',
        marginBottom: theme.spacing(2),
        fontWeight: '600'
    },
    verticalTimelineBody: {
        fontFamily: 'Raleway'
    }
}))
const ExperienceVertical = () => {

    const classes = useStyles()

    const Node = ({ active }) => {
        return (
            <div className={active ? `${classes.expNode} ${classes.expNodeActive}` : classes.expNode} >
                <div />
                <div />
            </div>
        )
    }

    return (
        <VerticalTimeline layout={"1-column"} className={classes.timelineWrapper}>
            <VerticalTimelineElement
                className={`${classes.verticalTimelineElement} vertical-timeline-element--work`}
                contentStyle={{ background: '#0F87E6', color: '#fff', marginLeft: '70px' }}
                contentArrowStyle={{ borderRight: '7px solid  #0F87E6' }}
                date="Jan 2020 - Present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<Node active={true} />}
            >
                <h3 className="vertical-timeline-element-title" className={classes.verticalTimelineTitle}>Web Developer</h3>
                <h4 className="vertical-timeline-element-subtitle" className={classes.verticalTimelineSubtitle}>at Dorado</h4>
                <p className={classes.verticalTimelineBody}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className={`${classes.verticalTimelineElement} vertical-timeline-element--work`}
                contentStyle={{ background: '#80807A', color: '#fff', marginLeft: '70px' }}
                contentArrowStyle={{ borderRight: '7px solid  #80807A' }}
                date="Sep 2019 - Feb 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<Node active={false} />}
            >
                <h3 className="vertical-timeline-element-title" className={classes.verticalTimelineTitle}>Web Dev Instructor</h3>
                <h4 className="vertical-timeline-element-subtitle" className={classes.verticalTimelineSubtitle}>at BinaryKiddo</h4>
                <p className={classes.verticalTimelineBody}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className={`${classes.verticalTimelineElement} vertical-timeline-element--work`}
                contentStyle={{ background: '#80807A', color: '#fff', marginLeft: '70px' }}
                contentArrowStyle={{ borderRight: '7px solid  #80807A' }}
                date="Feb 2019 - May 2019"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<Node active={false} />}
            >
                <h3 className="vertical-timeline-element-title" className={classes.verticalTimelineTitle}>Insurance Specialist</h3>
                <h4 className="vertical-timeline-element-subtitle" className={classes.verticalTimelineSubtitle}>at Futuready</h4>
                <p className={classes.verticalTimelineBody}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default ExperienceVertical