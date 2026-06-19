import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Hero() {
  return (
    <Section>
      <Container>
        <h1 className="text-6xl font-bold">
          Elektronikai javítás
        </h1>

        <p className="mt-6 text-lg">
          Telefonok, laptopok, konzolok, drónok...
        </p>

        <div className="mt-8">
          <Button>Javítás bejelentése</Button>
        </div>
      </Container>
    </Section>
  );
}