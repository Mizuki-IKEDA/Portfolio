import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProjects, getProjectsError, getProjectsStatus, fetchProjects} from "../../reducers/projectReducer";
import About from '../About';
import Contact from '../Contact';
import Home from '../Home';
import Mail from "../Mail";
import MenuEn from "../Menu";
import Menu from '../Menu';
import Projects from '../Projects';
import ProLinks from "../ProLinks";
import './style.scss';

function App() {

  // Fetching projects
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const projectsStatus = useSelector(getProjectsStatus);
  const error = useSelector(getProjectsError);
  
  useEffect(() => {
    if (projectsStatus === 'idle') {
      dispatch(fetchProjects())
    }
  }, [projectsStatus, dispatch]);

  // Language options
  const language = useSelector((state) => state.language.language);

  // Mouse shape
  // const dot = useRef(null);
  // const dotOutline = useRef(null);

  // const delay = 18;
  // const cursorVisible = useRef(true);
  // const cursorEnlarged = useRef(false);
  // const endX = useRef(window.innerWidth / 2);
  // const endY = useRef(window.innerHeight / 2);
  // const _x = useRef(0);
  // const _y = useRef(0);
  // const requestRef = useRef(null);

  // const toggleCursorVisibility = () => {
  //   if (cursorVisible.current) {
  //     dot.current.style.opacity = 1;
  //     dotOutline.current.style.opacity = 1;
  //   } else {
  //     dot.current.style.opacity = 0;
  //     dotOutline.current.style.opacity = 0;
  //   }
  // };

  // const toggleCursorSize = () => {
  //   if (cursorEnlarged.current) {
  //     dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
  //     dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
  //   } else {
  //     dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
  //     dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
  //   }
  // }

  // const mouseOverEvent =() => {
  //   cursorEnlarged.current = true;
  //   toggleCursorSize();
  // };

  // const mouseOutEvent = () => {
  //   cursorEnlarged.current = false;
  //   toggleCursorSize();
  // };

  // const mouseEnterEvent = () => {
  //   cursorVisible.current= true;
  //   toggleCursorVisibility();
  // };

  // const mouseLeaveEvent = () => {
  //   cursorVisible.current = false;
  //   toggleCursorVisibility();
  // };

  // const mouseMoveEvent = e => {
  //   cursorVisible.current=true;
  //   toggleCursorVisibility();

  //   endX.current = e.pageX;
  //   endY.current = e.pageY;

  //   dot.current.style.top = endY.current + 'px';
  //   dot.current.style.left = endX.current + 'px';
  // };

  // const animateDotOutline = () => {
  //   _x.current += (endX.current - _x.current) / delay;
  //   _y.current += (endY.current - _y.current) / delay;

  //   dotOutline.current.style.top = _y.current + 'px';
  //   dotOutline.current.style.left = _x.current + 'px';

  //   requestRef.current = requestAnimationFrame(animateDotOutline);
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', mouseOverEvent);
  //   document.addEventListener('mouseup', mouseOutEvent);
  //   document.addEventListener('mousemove', mouseMoveEvent);
  //   document.addEventListener('mouseenter', mouseEnterEvent);
  //   document.addEventListener('mouseleave', mouseLeaveEvent);

  //   animateDotOutline();

  //   return () => {
  //     document.removeEventListener('mousedown', mouseOverEvent);
  //     document.removeEventListener('mouseup', mouseOutEvent);
  //     document.removeEventListener('mousemove', mouseMoveEvent);
  //     document.removeEventListener('mouseenter', mouseEnterEvent);
  //     document.removeEventListener('mouseleave', mouseLeaveEvent); 

  //     cancelAnimationFrame(requestRef.current);
  //   };
  // }, []);

  return (
        <div className="app">
          {/* <div ref={dotOutline} className="cursor-dot-outline"></div>
          <div ref={dot} className="cursor-dot"></div> */}
          <Menu language={language} />
          <ProLinks />
          <Mail />
          <Home className="app--snap-element" language={language} />
          <About className="app--snap-element" language={language} />
          <Projects className="app--snap-element" projects={projects} language={language} />
          <Contact className="app--snap-element" language={language} />
        </div>
  );
}

export default App;
