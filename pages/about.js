import React from 'react'
import Link from 'next/link'
import styles from "../styles/About.module.css"

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About Hunting Coder</h1>
      <h2>Introduction</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut recusandae a eligendi aspernatur quaerat deleniti at fuga. Voluptatum cumque, hic beatae a, quas quibusdam, consectetur fugiat perspiciatis nihil totam sit? Quo saepe, minima dolorum provident laborum iste. Non culpa nemo facilis, possimus dolorem quod asperiores praesentium, id, repellendus nesciunt blanditiis cumque dignissimos iusto. Tenetur veritatis hic, porro explicabo voluptas deleniti incidunt. Facere sequi, sunt hic qui rerum minima fugit nulla doloremque placeat omnis quo assumenda provident? Dolore temporibus voluptatem placeat vitae labore? Officia, obcaecati explicabo perferendis sint mollitia enim repellat dolorum alias possimus dolores deleniti molestiae, libero nemo tempore exercitationem, beatae sequi culpa labore saepe est laboriosam eaque? Quam, optio modi, officiis dolores, vel dolorem eaque doloremque ab illo maxime laudantium possimus! Facilis nesciunt labore dolore voluptates quod quasi necessitatibus perspiciatis, neque perferendis deleniti veniam inventore accusamus at nobis iste repellendus! Excepturi ab saepe neque minima harum optio vel molestias.</p>
      <h2>Types of content</h2>
      <ul>
        <li>DSA</li>
        <li>Frameworks like Flask, Express, React etc.</li>
        <li>Languges like Python, Java, Javascript, html etc.</li>
        <li>DBMS</li>
        <li>Common Computer Problems and best paractices</li>
      </ul>
      <h2>Contact us</h2>
      <p>Contact us using this <Link href="/contact">Form</Link></p>
    </div>
  )
}

export default About