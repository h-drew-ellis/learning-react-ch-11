import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import NavLink from '../NavLink';
import './elements.css';
export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav className='nav'>
        <NavLink to='about'>About</NavLink>
        <NavLink to='events'>Events</NavLink>
        <NavLink to='products'>Products</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
      <nav className='nav'>
        <NavLink to='services'>Services</NavLink>
        <NavLink to='history'>History</NavLink>
        <NavLink to='location'>Location</NavLink>
        <NavLink to='/'>Home</NavLink>
      </nav>
    </div>
  );
}

export function Services() {
  return (
    <section>
      <h2>Our Services</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nex
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris mass. Vestibulum
        lacinia arcueget nulla. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaueos. Curabitur sodales ligula in
        libero.
      </p>
    </section>
  );
}
export function History() {
  return (
    <section>
      <h2>Company History</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nex
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris mass. Vestibulum
        lacinia arcueget nulla. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaueos. Curabitur sodales ligula in
        libero.
      </p>
    </section>
  );
}
export function Location() {
  return (
    <section>
      <h2>Locations</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nex
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris mass. Vestibulum
        lacinia arcueget nulla. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaueos. Curabitur sodales ligula in
        libero.
      </p>
    </section>
  );
}
export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
      <NavLink to='/'>Home</NavLink>
    </div>
  );
}

export function Products() {
  return (
    <div>
      <h1>[Products]</h1>
      <NavLink to='/'>Home</NavLink>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contacts]</h1>
      <NavLink to='/'>Home</NavLink>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}
