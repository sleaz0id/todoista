GrapeSwaggerRails.options.url = '/api/docs'
GrapeSwaggerRails.options.app_name = 'Todoista'
GrapeSwaggerRails.options.before_action_proc = proc {
  GrapeSwaggerRails.options.app_url = request.protocol + request.host_with_port
}
