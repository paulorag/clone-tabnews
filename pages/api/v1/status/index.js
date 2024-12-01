function status(request, response) {
  response.status(200).json({ chave: "é isto" });
}

export default status;
