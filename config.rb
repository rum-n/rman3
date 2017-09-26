# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
page "/results/*", :layout => "results"
page "/sofiamarathon-2016"
page "/pirinskyrun-2017"
page "/spokesandspikes-2017"
page "/ludogorets-2017"

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/
activate :directory_indexes

activate :relative_assets
activate :sprockets
activate :gzip
activate :imageoptim
activate :minify_html
activate :asset_hash
# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end
set :relative_links, true
# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :minify_css
  activate :minify_javascript
end
