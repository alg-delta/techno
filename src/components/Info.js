import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function Info() {
  return (
    <div>
      <Accordion defaultActiveKey="0" flush style={{ width: "35rem" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Історія</Accordion.Header>
          <Accordion.Body>
            Історія "TeCHNO" розпочалася з мрії – зробити доступними
            найсучасніші технології для кожного. Засновники магазину, щирі
            ентузіасти електроніки, прагнули створити місце, де покупці не
            просто знаходять потрібні їм пристрої, а й отримують емоції та
            натхнення. "TeCHNO" – це не просто магазин, це спільнота людей,
            об'єднаних любов'ю до гаджетів. Тут ви завжди знайдете
            кваліфікованих консультантів, які допоможуть вам підібрати смартфон,
            що відповідає вашим потребам та бюджету, або ж порадять нову камеру,
            що допоможе вам зафіксувати найдорожчі моменти життя.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
