class Service {
  constructor (repository) {
    this.repository = repository
    this.model = 'Modelo'
  }

  async create (res, body) {
    const data = await this.repository.create(body)
    return res
      .status(201)
      .json({ data, status: 201, message: `${this.model} creado` })
  }

  async findAll (res, options = {}) {
    const data = await this.repository.findAll(options)
    return res
      .status(200)
      .json({ data, status: 200, message: `Lista de ${this.model}` })
  }

  async findOne (res, options) {
    const data = await this.repository.findOne(options)

    if (!data) {
      return res
        .status(400)
        .json()
    }

    return res
      .status(200)
      .json({ data, status: 200, message: `${this.model}` })
  }

  async findByPk (res, id) {
    const data = await this.repository.findByPk(id)

    if (!data) {
      return res
        .status(400)
        .json()
    }

    return res
      .status(200)
      .json({ data, status: 200, message: `${this.model} de id ${id}` })
  }

  async update (res, id, body) {
    const data = await this.repository.findByPk(id)

    if (!data) {
      return res
        .status(400)
        .json()
    }

    const payload = {
      ...data.dataValues,
      ...body
    }

    await this.repository.update(id, payload)

    return res
      .status(200)
      .json({ data: payload, status: 200, message: `${this.model} actualizado` })
  }

  async remove (res, id) {
    const data = await this.repository.findByPk(id)

    if (!data) {
      return res
        .status(400)
        .json()
    }

    await this.repository.remove(id)

    return res
      .status(204)
      .json({ data: null, status: 204, message: `${this.model} eliminado` })
  }
}

module.exports = Service
