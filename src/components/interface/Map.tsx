const MapApp = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.5572922690862!2d-49.4254555854507!3d-20.80919077162102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdadbe56d6dedb%3A0xd86cd0ee9c53facf!2sR.%20S%C3%A3o%20Benedito%2C%20210%20-%20Gonzaga%20de%20Campos%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP%2C%2015035-270!5e0!3m2!1spt-BR!2sbr!4v1675258588176!5m2!1spt-BR!2sbr"
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapApp;
