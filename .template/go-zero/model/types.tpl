type (
	{{.lowerStartCamelObject}}Model interface{
		{{.method}}

		// custom interface generated by jzero
	    BulkInsert(ctx context.Context, datas []*{{.upperStartCamelObject}}) error
        FindByCondition(ctx context.Context, conds ...condition.Condition) ([]*{{.upperStartCamelObject}}, error)
        FindOneByCondition(ctx context.Context, conds ...condition.Condition) (*{{.upperStartCamelObject}}, error)
        PageByCondition(ctx context.Context, conds ...condition.Condition) ([]*{{.upperStartCamelObject}}, int64 ,error)
	}

	default{{.upperStartCamelObject}}Model struct {
		{{if .withCache}}sqlc.CachedConn{{else}}conn sqlx.SqlConn{{end}}
		table string
	}

	{{.upperStartCamelObject}} struct {
		{{.fields}}
	}
)
