const formatDate = (data: string) => {

  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeZone: 'UTC' }).format(new Date(data));
}

export { formatDate }

