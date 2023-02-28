# Regenerate schema.graphql whenever graph files change
# guard 'rake', task: 'graphql:schema:dump' do
#   watch(%r{^app/graphql/.+$})
# end

guard 'shell' do
  watch(%r{^app/graphql/.+$}) do
    `bundle exec rake graphql:schema:dump`
  end
end