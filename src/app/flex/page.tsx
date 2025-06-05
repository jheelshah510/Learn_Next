import Image from "next/image";
import styles from "./page.module.css"
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="flex justify-around gap-6 flex-wrap p-6">
      <Card 
      imageSrc="/party.jpg" 
      title="Lorem ipsum dolor sit amet." 
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam minima ducimus rem quo cumque ipsa recusandae, ab labore tempore atque ad perferendis vel excepturi expedita possimus eius itaque iusto quisquam."
      />
     <Card 
      imageSrc="/party.jpg" 
      title="Lorem ipsum dolor sit amet." 
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam minima ducimus rem quo cumque ipsa recusandae, ab labore tempore atque ad perferendis vel excepturi expedita possimus eius itaque iusto quisquam."
      />
      <Card 
      imageSrc="/party.jpg" 
      title="Lorem ipsum dolor sit amet." 
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam minima ducimus rem quo cumque ipsa recusandae, ab labore tempore atque ad perferendis vel excepturi expedita possimus eius itaque iusto quisquam."
      />
      <Card 
      imageSrc="/party.jpg" 
      title="Lorem ipsum dolor sit amet." 
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam minima ducimus rem quo cumque ipsa recusandae, ab labore tempore atque ad perferendis vel excepturi expedita possimus eius itaque iusto quisquam."
      />
      <Card 
      imageSrc="/party.jpg" 
      title="Lorem ipsum dolor sit amet." 
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam minima ducimus rem quo cumque ipsa recusandae, ab labore tempore atque ad perferendis vel excepturi expedita possimus eius itaque iusto quisquam."
      />
      <Card 
      imageSrc="/party.jpg" 
      title="Lorem ipsum dolor sit amet." 
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam minima ducimus rem quo cumque ipsa recusandae, ab labore tempore atque ad perferendis vel excepturi expedita possimus eius itaque iusto quisquam."
      />
    </div>
  );
}
